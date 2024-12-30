import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'

export default function Pricing() {
  const plans = [
    {
      name: 'Monthly',
      price: '250₹',
      description: 'Essential features for personal training',
      features: [
        'Basic workout tracking',
        'Exercise video library',
        'AI chat support (limited)',
      ],
    },
    {
      name: '3-Month',
      price: '600₹',
      description: 'Advanced features for serious athletes',
      features: [
        'Advanced computer vision tracking',
        'Unlimited exercise videos',
        'Unlimited AI chat support',
        'Custom workout programs',
        'Progress analytics',
      ],
    },
    {
      name: 'Yearly',
      price: '2000₹',
      description: 'Complete solution for professional training',
      features: [
        'All Pro features',
        'Priority support',
        'Personal training sessions',
        'Nutrition planning',
        'Group training features',
      ],
    },
  ]

  return (
    (<section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

