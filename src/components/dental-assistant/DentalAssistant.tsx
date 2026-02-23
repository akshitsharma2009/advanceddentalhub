import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bot, User, ArrowRight, RotateCcw, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { dentalProblems, questionOptions } from "./dentalAssistantData";

interface Message {
  role: "bot" | "user";
  content: string;
  options?: string[];
  isAdvice?: boolean;
}

const DentalAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hello 👋 I'm your Tooth Care Assistant. What problem are you facing?",
      options: dentalProblems.map((p) => `${p.icon} ${p.label}`),
    },
  ]);
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const addMessages = (...msgs: Message[]) => {
    setMessages((prev) => [...prev, ...msgs]);
  };

  const handleProblemSelect = (option: string) => {
    const otherOption = "🤔 Other (type your problem)";
    if (option === otherOption) {
      addMessages({ role: "user", content: option });
      setShowCustomInput(true);
      addMessages({
        role: "bot",
        content: "Please describe your dental problem below:",
      });
      return;
    }

    const problem = dentalProblems.find(
      (p) => `${p.icon} ${p.label}` === option
    );
    if (!problem) return;

    setSelectedProblem(problem.id);
    setCurrentQuestionIndex(0);
    setAnswers([]);

    const opts = questionOptions[problem.id]?.[0];
    addMessages(
      { role: "user", content: option },
      {
        role: "bot",
        content: problem.questions[0],
        options: opts,
      }
    );
  };

  const handleAnswerSelect = (answer: string) => {
    if (!selectedProblem) return;

    const problem = dentalProblems.find((p) => p.id === selectedProblem)!;
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < problem.questions.length) {
      setCurrentQuestionIndex(nextIndex);
      const opts = questionOptions[selectedProblem]?.[nextIndex];
      addMessages(
        { role: "user", content: answer },
        {
          role: "bot",
          content: problem.questions[nextIndex],
          options: opts,
        }
      );
    } else {
      // All questions answered — show advice
      const { advice } = problem;
      const adviceText = `🦷 **Problem: ${problem.label}**

**Possible Cause:**
${advice.cause}

**Home Care Solution:**
${advice.tips.map((t) => `✔ ${t}`).join("\n")}

**Duration:**
⏱ ${advice.duration}

**Important:**
⚠️ ${advice.warning}

---
_This tool gives basic guidance only and does not replace a dentist consultation._`;

      addMessages(
        { role: "user", content: answer },
        { role: "bot", content: adviceText, isAdvice: true }
      );
      setIsComplete(true);
    }
  };

  const handleCustomSubmit = () => {
    if (!customInput.trim()) return;
    addMessages(
      { role: "user", content: customInput },
      {
        role: "bot",
        content: `Thank you for sharing your concern about "${customInput}".

Based on your description, here's some general advice:

**Home Care Tips:**
✔ Maintain good oral hygiene — brush twice daily
✔ Rinse with warm salt water 2–3 times a day
✔ Avoid very hot, cold, or hard foods
✔ Stay hydrated and eat a balanced diet
✔ Avoid tobacco and limit sugary snacks

**Duration:**
⏱ If symptoms are mild, improvement may be seen in 5–7 days.

**Important:**
⚠️ Since your problem may need specific attention, we strongly recommend visiting our dentist for a proper diagnosis.

---
_This tool gives basic guidance only and does not replace a dentist consultation._`,
        isAdvice: true,
      }
    );
    setCustomInput("");
    setShowCustomInput(false);
    setIsComplete(true);
  };

  const handleRestart = () => {
    setMessages([
      {
        role: "bot",
        content:
          "Hello 👋 I'm your Tooth Care Assistant. What problem are you facing?",
        options: dentalProblems.map((p) => `${p.icon} ${p.label}`),
      },
    ]);
    setSelectedProblem(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setCustomInput("");
    setShowCustomInput(false);
    setIsComplete(false);
  };

  const renderContent = (text: string) => {
    // Simple markdown-like rendering
    return text.split("\n").map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={i} className="font-semibold text-foreground mt-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.startsWith("🦷 **")) {
        return (
          <p key={i} className="font-bold text-lg text-primary mt-1">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.startsWith("✔")) {
        return (
          <p key={i} className="text-muted-foreground ml-2">
            {line}
          </p>
        );
      }
      if (line.startsWith("⏱") || line.startsWith("⚠️")) {
        return (
          <p key={i} className="text-muted-foreground mt-1">
            {line}
          </p>
        );
      }
      if (line === "---") {
        return <hr key={i} className="my-3 border-border" />;
      }
      if (line.startsWith("_") && line.endsWith("_")) {
        return (
          <p key={i} className="text-xs text-muted-foreground italic mt-1">
            {line.replace(/_/g, "")}
          </p>
        );
      }
      if (line.trim() === "") return <br key={i} />;
      return (
        <p key={i} className="text-muted-foreground">
          {line}
        </p>
      );
    });
  };

  // Determine if last message has clickable options
  const lastMessage = messages[messages.length - 1];
  const showOptions =
    lastMessage?.role === "bot" && lastMessage.options && !isComplete;
  const isProblemSelection = !selectedProblem && !showCustomInput;

  return (
    <Card className="flex flex-col h-[600px] max-w-2xl mx-auto overflow-hidden border-primary/20">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20">
          <Bot className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-primary-foreground text-sm">
            Tooth Care Assistant
          </h3>
          <p className="text-primary-foreground/70 text-xs">
            Advanced Dental Hub
          </p>
        </div>
        {(selectedProblem || isComplete) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRestart}
            className="ml-auto text-primary-foreground hover:bg-primary-foreground/20 gap-1"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Restart
          </Button>
        )}
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "bot" && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-card border border-border rounded-bl-md"
              }`}
            >
              {msg.isAdvice ? (
                <div className="space-y-0.5">{renderContent(msg.content)}</div>
              ) : (
                <p>{msg.content}</p>
              )}
            </div>
            {msg.role === "user" && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
                <User className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}

        {/* Options buttons */}
        {showOptions && (
          <div className="flex flex-wrap gap-2 pl-9">
            {lastMessage.options!.map((opt) => (
              <button
                key={opt}
                onClick={() =>
                  isProblemSelection
                    ? handleProblemSelect(opt)
                    : handleAnswerSelect(opt)
                }
                className="rounded-full border border-primary/30 bg-card px-3.5 py-1.5 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {opt}
              </button>
            ))}
            {isProblemSelection && (
              <button
                onClick={() =>
                  handleProblemSelect("🤔 Other (type your problem)")
                }
                className="rounded-full border border-primary/30 bg-card px-3.5 py-1.5 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                🤔 Other
              </button>
            )}
          </div>
        )}

        {/* Book appointment CTA */}
        {isComplete && (
          <div className="pl-9 space-y-3">
            <p className="text-sm font-medium text-foreground">
              Would you like to book an appointment with our dentist?
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm" className="gap-1.5">
                <Link to="/appointment">
                  <Calendar className="h-3.5 w-3.5" />
                  Book Appointment
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={handleRestart} className="gap-1.5">
                <RotateCcw className="h-3.5 w-3.5" />
                Ask Another Question
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Custom input */}
      {showCustomInput && !isComplete && (
        <div className="border-t border-border p-3 flex gap-2">
          <Input
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Describe your problem..."
            onKeyDown={(e) => e.key === "Enter" && handleCustomSubmit()}
            className="text-sm"
          />
          <Button size="icon" onClick={handleCustomSubmit} disabled={!customInput.trim()}>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
};

export default DentalAssistant;
