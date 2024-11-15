import BookForm from "../components/Forms/BookForm";
import SectionWrapper from "../components/Wrappers/SectionWrapper";

const Form = () => {
  return (
    <div id="form">
      <SectionWrapper cn="h-full w-full bg-form bg-center bg-cover pb-20 md:min-h-screen max-lg:mt-20">
        <h2 className="py-5 text-center font-semibold text-3xl">Book Now</h2>
        <BookForm />
      </SectionWrapper>
    </div>
  );
};

export default Form;
