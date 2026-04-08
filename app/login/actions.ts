'use server';

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

function getSafeNextPath(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return "/dashboard";
  }

  if (!value.startsWith("/") || value.startsWith("//")) {
    return "/dashboard";
  }

  return value;
}

function buildLoginRedirect(errorCode: string, nextPath: string) {
  const searchParams = new URLSearchParams({
    error: errorCode,
  });

  if (nextPath !== "/dashboard") {
    searchParams.set("next", nextPath);
  }

  return `/login?${searchParams.toString()}`;
}

export async function login(formData: FormData) {
  const emailValue = formData.get("email");
  const passwordValue = formData.get("password");
  const nextPath = getSafeNextPath(formData.get("next"));

  const email = typeof emailValue === "string" ? emailValue.trim() : "";
  const password = typeof passwordValue === "string" ? passwordValue : "";

  if (!email || !password) {
    redirect(buildLoginRedirect("missing_fields", nextPath));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(buildLoginRedirect("invalid_credentials", nextPath));
  }

  revalidatePath("/", "layout");
  redirect(nextPath);
}
