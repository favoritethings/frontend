"use server"

import { redirect } from 'next/navigation';

const join = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVICE_API_URL}/member/login`, {method: "POST", body: JSON.stringify({email, password})});

  if(!response.ok) {
    return {
      error: true,
      message: "예상치 못한 서버 문제가 발생했습니다."
    }
  }

  redirect("/");
}

export { join }