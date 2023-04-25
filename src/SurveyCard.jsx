const SurveyCard = ({addSurveyScore, handleSubmissionChange}) => {

    const handleClick = (e) => {
        addSurveyScore(e.target.value)
    }

  return (
    <div className="mt-10 mb-10 rounded-xl bg-very-dark-blue w-[330px] h-[360px] bg-gradient-to-br from-dark-blue to-very-dark-blue">
      <div className="p-6">
        <div className="w-[40px] h-[44px] rounded-full bg-dark-blue grid place-items-center">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </div>
        <h1 className="mt-4 text-white text-2xl font-semibold">
          How did we do?
        </h1>
        <p className="mt-4 text-medium-grey text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="mt-4 buttons flex gap-4">
          <button className="items-center font-overpass hover:bg-orange hover:text-white w-[44px]  h-[44px] rounded-full bg-dark-blue grid place-items-center text-light-grey focus:text-white focus:bg-medium-grey" onClick={handleClick} value="1">
            1
          </button>
          <button className="items-center font-overpass hover:bg-orange hover:text-white w-[44px]  h-[44px] rounded-full bg-dark-blue grid place-items-center text-light-grey focus:text-white focus:bg-medium-grey" onClick={handleClick} value="2">
            2
          </button>
          <button className="items-center font-overpass hover:bg-orange hover:text-white w-[44px]  h-[44px] rounded-full bg-dark-blue grid place-items-center text-light-grey focus:text-white focus:bg-medium-grey" onClick={handleClick} value="3">
            3
          </button>
          <button className="items-center font-overpass hover:bg-orange hover:text-white w-[44px]  h-[44px] rounded-full bg-dark-blue grid place-items-center text-light-grey focus:text-white focus:bg-medium-grey" onClick={handleClick} value="4">
            4
          </button>
          <button className="items-center font-overpass hover:bg-orange hover:text-white w-[44px]  h-[44px] rounded-full bg-dark-blue grid place-items-center text-light-grey focus:text-white focus:bg-medium-grey" onClick={handleClick} value="5">
            5
          </button>
        </div>
        <div className="flex items-center justify-center">

        </div>
        <button className="mt-5 py-2 px-4 m-auto min-w-full font-overpass  text-white active:bg-white active:text-orange bg-orange rounded-full " onClick={handleSubmissionChange}>
            <span>Submit</span>
          </button>
      </div>
    </div>
  );
};

export default SurveyCard;
