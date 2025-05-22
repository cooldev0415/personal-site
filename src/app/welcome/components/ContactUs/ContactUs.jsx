'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { styles, EarthCanvas, SectionWrapper } from "@/components";
import { slideIn } from "@/utils";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
}).required();

const FeedbackMessage = ({ type, message }) => {
  if (!message) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-4 p-4 rounded-lg ${
        type === 'success' 
          ? 'bg-green-500/20 text-green-500' 
          : 'bg-red-500/20 text-red-500'
      }`}
    >
      {message}
    </motion.div>
  );
};

const ContactUs = () => {
  const formRef = useRef();
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = async (data) => {
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "  ",
          from_email: data.email,
          to_email: "web.dev0415@gmail.com",
          message: `${data.message} \n ${data.email}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      if (result.status !== 200) {
        throw new Error('Failed to send email');
      }
      
      return result;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
      setFeedback({
        type: 'success',
        message: "Thank you! I will get back to you as soon as possible."
      });
      reset();
      // Clear feedback after 5 seconds
      setTimeout(() => setFeedback({ type: '', message: '' }), 5000);
    },
    onError: () => {
      setFeedback({
        type: 'error',
        message: "Something went wrong. Please try again."
      });
    },
  });

  const onSubmit = (data) => {
    setFeedback({ type: '', message: '' }); // Clear previous feedback
    mutation.mutate(data);
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className='mt-12 flex flex-col gap-8'
        >
          <div className='flex flex-col'>
            <label className='text-white font-medium mb-4'>Your Name</label>
            <input
              type='text'
              {...register("name")}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
            )}
          </div>

          <div className='flex flex-col'>
            <label className='text-white font-medium mb-4'>Your email</label>
            <input
              type='email'
              {...register("email")}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          <div className='flex flex-col'>
            <label className='text-white font-medium mb-4'>Your Message</label>
            <textarea
              rows={7}
              {...register("message")}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <button
              type='submit'
              disabled={mutation.isPending}
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {mutation.isPending ? "Sending..." : "Send"}
            </button>
            
            <FeedbackMessage type={feedback.type} message={feedback.message} />
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactUs, "contact");
