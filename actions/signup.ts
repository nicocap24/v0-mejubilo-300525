"use server"

export async function signupForUpdates(formData: FormData) {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("email") as string

  // In a real app, you'd save this to a database
  console.log("New signup:", email)

  return {
    success: true,
    message: "¡Gracias! Te notificaremos cuando lancemos.",
  }
}
