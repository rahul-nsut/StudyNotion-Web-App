import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Directly send your doubts on our email",
    description: "Our team is always here to help.",
    details: "help@studynotion.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at our headquarters.",
    details:
      "ABC Nagar, 1st Cross, Gurugram-122004",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Any day between 9am to 6pm",
    details: "+91 9999999999",
  },
]

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-richblack-5">
                {ele?.heading}
              </h1>
            </div>
            <p className="font-medium">{ele?.description}</p>
            <p className="font-semibold">{ele?.details}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ContactDetails