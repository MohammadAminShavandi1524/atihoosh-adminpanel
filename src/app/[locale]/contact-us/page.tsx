import ContactInfo from "@/components/contactUs/ContactInfo";
import HeroSection from "@/components/contactUs/HeroSection";
import SendMessageForm from "@/components/contactUs/SendMessageForm";

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className="headerPadding">
      <div>
        <HeroSection />

        <div className="w90 my-18 grid grid-cols-3 gap-x-10 px-50">
          <SendMessageForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default page;
