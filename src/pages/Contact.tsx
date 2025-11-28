// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { Mail, Send } from "lucide-react";

// export default function Contact() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[80vh]">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-3xl mx-auto text-center mb-12"
//       >
//         <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-md">Get in Touch</h1>
//         <p className="text-xl text-white/90">
//           Have a project in mind or just want to say hi? I'd love to hear from you.
//         </p>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="w-full max-w-md"
//       >
//         <Card className="bg-white/10 backdrop-blur-md border-white/20">
//           <CardContent className="p-8 flex flex-col items-center gap-6">
//             <div className="p-4 rounded-full bg-white/20 text-white">
//               <Mail className="h-12 w-12" />
//             </div>
            
//             <div className="text-center space-y-2">
//               <h2 className="text-2xl font-semibold text-white">Email Me</h2>
//               <p className="text-white/70">
//                 Click below to send me an email directly.
//               </p>
//             </div>

//             <a href="mailto:shahzodislomov39@gmail.com" className="w-full">
//               <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-bold text-lg h-14">
//                 <Send className="mr-2 h-5 w-5" /> Send Email
//               </Button>
//             </a>
            
//             <p className="text-sm text-white/50">
//               shahzodislomov39@gmail.com
//             </p>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-md">Get in Touch</h1>
        <p className="text-xl text-white/90">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-8 flex flex-col items-center gap-6">
            <div className="p-4 rounded-full bg-white/20 text-white">
              <Mail className="h-12 w-12" />
            </div>
            
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold text-white">Email Me</h2>
              <p className="text-white/70">
                Click below to send me an email directly.
              </p>
            </div>

            <a href="mailto:shahzodislomov39@gmail.com" className="w-full">
              <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-bold text-lg h-14">
                <Send className="mr-2 h-5 w-5" /> Send Email
              </Button>
            </a>
            
            <p className="text-sm text-white/50">
              shahzodislomov39@gmail.com
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}