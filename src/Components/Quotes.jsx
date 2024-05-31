import Quote from "./Quote";

const Quotes = ({chosenChoice}) => {
  return (
    <div>
      {chosenChoice.com_1_perso_id && chosenChoice.com_1_quote && <Quote persoName={chosenChoice.com_1_perso_id} content={chosenChoice.com_1_quote}/>}
      {chosenChoice.com_2_perso_id && chosenChoice.com_2_quote && <Quote persoName={chosenChoice.com_2_perso_id} content={chosenChoice.com_2_quote}/>}
      {chosenChoice.com_3_perso_id && chosenChoice.com_3_quote && <Quote persoName={chosenChoice.com_3_perso_id} content={chosenChoice.com_3_quote}/>}
    </div>
  );
};

export default Quotes;