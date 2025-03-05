"use server";

export async function loginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { status: "error", message: "Email dan password wajib diisi." };
  }

  // Simpan logic autentikasi di sini (misalnya API request ke backend)
  if (email === "test@example.com" && password === "password123") {
    return { status: "success", message: "Login berhasil!" };
  }

  return { status: "error", message: "Email atau password salah." };
}
