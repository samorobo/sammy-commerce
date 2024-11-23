import { Button } from "@/components/ui/button";

async function startCheckout() {
  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      successUrl: `${window.location.origin}/training?status=success`,
      cancelUrl: `${window.location.origin}/training?status=cancel`,
    }),
  });

  const data = await response.json();
  window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
}

export default function StartTrainingButton() {
  return <Button onClick={startCheckout}>Start Training - $25</Button>;
}
