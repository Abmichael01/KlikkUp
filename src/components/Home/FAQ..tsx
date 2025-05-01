import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MainPadding from "@/layouts/MainPadding"
import { motion } from "framer-motion"

const faqData = [
  {
    question: "WHAT IS KLIKK UP?",
    answer:
      "KlikkUp is a task-reward platform and your gateway to an exciting gaming world. We designed KlikkUp to offer a fun, engaging way to earn rewards while preparing for the launch of our upcoming game. By watching videos, reading stories, solving riddles, and completing simple tasks, users earn points that will later become gaming coins used in our game. We believe games should be more than just entertainment – they should reward users for their curiosity, effort, and engagement. KlikkUp is our first step toward building a game ecosystem where users are active contributors and benefit from every interaction.",
  },
  {
    question: "HOW DO I REGISTER?",
    answer:
      "Go to the sign-up page and fill in the necessary information. Press the coupon code button to get a coupon code, then insert it on the sign-up page to register.",
  },
  {
    question: "WHAT INFORMATION DO I NEED TO PROVIDE TO OPEN AN ACCOUNT?",
    answer: "We require an email address and a username.",
  },
  {
    question: "HOW DO I EARN POINTS?",
    answer:
      "Earn points by completing tasks like reading stories, watching educative videos, and engaging on our social platforms.",
  },
  {
    question: "HOW DO I REFER SOMEONE?",
    answer: "By sharing your referral code with them.",
  },
  {
    question: "HOW DO I GET COUPON CODE?",
    answer: "Go to the 'Get Coupon' section to obtain the code.",
  },
  {
    question: "IS THERE ANY FEE TO JOIN KLIKK UP?",
    answer:
      "Yes, joining KlikkUp requires a 3000 Naira management fee. This fee grants access to all KlikkUp features and a one-time entry to all future projects, including earning models and community activities. This fee also adds value to our projects, which you will surely get back during the giveaways.",
  },
  {
    question: "HOW DO I STAY UPDATED ON KLIKK UP AND CONNECT WITH THE COMMUNITY?",
    answer:
      "Stay connected with KlikkUp by joining our official social channels. Use the social media icons on this page to follow us on WhatsApp, Telegram, and TikTok for the latest updates and community engagement.",
  },
  {
    question: "HOW DO I GET REWARDED?",
    answer:
      "You get rewarded during the giveaways and monthly bonuses.",
  },
  {
    question: "CAN I KEEP MY POINTS?",
    answer:
      "Yes, keeping your points is the best decision because when the actual game is launched, you can convert your points to real money. The conversion ratio will be announced soon.",
  },
  {
    question: "IS THERE A LIMIT TO HOW MANY POINTS I CAN HAVE?",
    answer: "Yes, to prevent abuse.",
  },
  {
    question: "HOW DO I EARN N100K MONTHLY?",
    answer:
      "Note, this monthly N100k bonus is only for users who already have a community to refer. To be eligible, you need to refer a minimum of 50 users monthly. This bonus is available for a limited time.",
  },
  {
    question: "DO I EARN MONEY FROM REFERRING PEOPLE?",
    answer:
      "Yes, aside from the N100k monthly bonus, you also earn 10% from each of your referred users' payments.",
  },
  {
    question: "WHEN DO WE MIGRATE TO THE GAME?",
    answer:
      "We will migrate once the game is fully developed and ready for launch.",
  },
]

const FAQ: React.FC = () => {
  return (
    <MainPadding className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto" id="faq">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center fancy-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/10 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/20 transition-all duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white/5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </MainPadding>
  )
}

export default FAQ
