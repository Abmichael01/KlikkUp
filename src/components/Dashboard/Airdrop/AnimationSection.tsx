import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const AnimationSection: React.FC = () => {
  return (
    <Card className="border-none bg-blue-900 text-white shadow-md overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col items-center py-8 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)]"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 mb-6"
          >
            <h2 className="text-3xl fancy-font font-semibold text-secondary text-center">Continue to farm</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="z-10 mt-6 max-w-2xl"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-center">
              You can decide to keep your points until the future project is revealed
            </h2>
            <p className="text-blue-300 text-center mt-4">
              The longer you hold and farm, the greater your potential rewards will be. Stay active in the community
              for the best results.
            </p>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AnimationSection
