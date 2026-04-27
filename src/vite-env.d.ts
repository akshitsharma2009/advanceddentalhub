/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "vapi-widget": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        "public-key"?: string;
        "assistant-id"?: string;
        mode?: string;
        size?: string;
        theme?: string;
      },
      HTMLElement
    >;
  }
}
