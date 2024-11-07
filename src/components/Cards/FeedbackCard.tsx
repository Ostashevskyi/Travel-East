import { TFeedback } from "../../types/Feedback";
import { quotesIcn } from "../../utils";

const FeedbackCard = ({ feedback }: { feedback: TFeedback }) => {
  const { feedback_text, user_image, user_job, user_name } = feedback;

  return (
    <div className="bg-deals-card-bg flex gap-11 items-center justify-center pt-10 pb-16 px-4 rounded-xl max-w-[860px] lg:h-[350px] max-lg:flex-col-reverse">
      <div className="max-w-[580px] lg:max-[1440px]:max-w-[400px] relative">
        <img src={quotesIcn} alt="quotes" className="absolute -top-9 left-0" />
        <q className="text-sm">{feedback_text}</q>
      </div>
      <div className="flex items-center flex-col gap-3 font-semibold">
        <img src={user_image} alt="user logo" />
        <h3 className="text-lg">{user_name}</h3>
        <p className="text-sm text-white/80">{user_job}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
