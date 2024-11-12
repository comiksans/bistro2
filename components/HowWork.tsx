import Image from 'next/image'

import { Container } from '@/components/Container2'

import person1 from '@/images/person1.png'
import robot2 from '@/images/robot2.png'
import person2 from '@/images/person2.png'
import robot3 from '@/images/robot3.png'

const resources = [

  {
    title: '1. Customer Call',
    description:
      'A customer calls your restaurant with an order or reservation request',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={person1} alt="" unoptimized />
        </div>
      )
    },
  },

  {
    title: '2. Bistro IQ answers',
    description:
      'Our AI-powered agent picks up, ensuring a friendly, professional response every time',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={robot2} alt="" unoptimized />
        </div>
      )
    },
  },

  {
    title: '3. Engaging conversations',
    description:
      'Bistro IT chats with the customer, confirms details, and captures the order!',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={person2}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />

        </div>
      )
    },
  },
  {
    title: '4. Integration with POS',
    description:
      "We seamlessly relay orders and reservations into your system, alerting your human team!",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={robot3} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function HowWork() {
  
  return (
    <section
      id="howitworks"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-10 sm:scroll-mt-32 sm:py-20 lg:py-17"
    >
      <Container>

        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
         How Bistro IQ works
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Bistro IQ helps your capture every opportuity for revenue - even when you're busy!
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
