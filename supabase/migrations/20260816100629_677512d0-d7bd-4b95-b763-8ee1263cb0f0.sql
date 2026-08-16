CREATE TABLE public.consultation_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reference_id TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  dob DATE,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  purpose TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.consultation_leads TO anon;
GRANT INSERT ON public.consultation_leads TO authenticated;
GRANT ALL ON public.consultation_leads TO service_role;

ALTER TABLE public.consultation_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a consultation request"
ON public.consultation_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);