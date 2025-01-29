import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MainPadding from "@/layouts/MainPadding"
import { motion } from "framer-motion"

const faqData = [
  {
    question: "WHAT IS KLIKK UP?",
    answer:
      "Klikk up is a prerequisite to a telegram based crypto platform which will be disclosed soon. It is designed to revolutionize the way users interact with content by allowing them to earn points through simple activities. These points will later be converted into tokens, giving you real value for your participation! We aim to create a decentralized and transparent ecosystem where users are fairly rewarded for their online engagement. The future project will be built on Web3 technology, ensuring security, transparency, and seamless token integration.",
  },
  {
    question: "HOW DO I REGISTER?",
    answer:
      "Go to the sign-up page and fill in necessary information. Press the coupon code button to get a coupon code, then insert it in the sign-up page to register.",
  },
  {
    question: "WHAT INFORMATION DO I NEED TO PROVIDE TO OPEN AN ACCOUNT?",
    answer: "We require an email address and username.",
  },
  {
    question: "HOW DO I EARN POINTS?",
    answer:
      "Earn points by completing tasks like reading stories, watching educative videos and engaging on our socials.",
  },
  {
    question: "HOW DO I REFER SOMEONE?",
    answer: "By sharing your referral code with them.",
  },
  {
    question: "HOW DO I GET COUPON CODE?",
    answer: "Go to the get coupon section to get the code.",
  },
  {
    question: "IS THERE ANY FEE TO JOIN KLIKK UP?",
    answer:
      "Yes, joining Klikk Up requires a $3 management fee. This fee grants access to all Klikk Up features and a one-time access to all future projects, including earning models, and the network's community activities. This fee is also to create value for our projects which you will surely get back during the structured airdrops.",
  },
  {
    question: "HOW DO I STAY UPDATED ON KLIKK UP AND CONNECT WITH THE COMMUNITY?",
    answer:
      "Stay connected with Klikk Up by joining our official social channels. Use the social media icons on this page to follow us on WhatsApp, Telegram, TikTok for the latest updates and community engagement.",
  },
  {
    question: "HOW DO I GET REWARDED?",
    answer:
      "You get rewarded during the airdrop seasons. If you miss one, there will surely be another one until our future project is revealed. You need to farm as many points as possible to get rewarded.",
  },
  {
    question: "WHAT BLOCKCHAIN ARE YOU USING?",
    answer:
      "The blockchain will be revealed after we reveal the future project. Log in to check the roadmap for more explanation.",
  },
  {
    question: "CAN I CONVERT MY FARMED POINTS TO MONEY?",
    answer: "Yes, you can decide to convert it to money during airdrop season.",
  },
  {
    question: "CAN I KEEP MY FARMED POINTS?",
    answer:
      "Yes, keeping your farmed points is the best decision for you. When the future project is revealed, you can convert your farmed points to real tokens. The conversion ratio will be announced soon.",
  },
  {
    question: "IS THERE A LIMIT TO HOW MANY POINTS I CAN FARM?",
    answer: "Yes, to prevent abuse.",
  },
]

const FAQ: React.FC = () => {
  return (
    <MainPadding className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
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

