import BookForm from "../components/Forms/BookForm";
import SectionWrapper from "../components/Wrappers/SectionWrapper";

const Form = () => {
  return (
    <SectionWrapper cn="h-full w-full bg-form bg-center bg-cover pb-20">
      <h2 className="py-5 text-center font-semibold text-3xl">Book Now</h2>
      <BookForm />
    </SectionWrapper>
  );
};

export default Form;
