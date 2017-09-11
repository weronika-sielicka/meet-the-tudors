import React from 'react';
import ReactDOM from 'react-dom';
const BioContent = require('../js/bio_content.jsx');
const Tree = require('../js/tree.jsx');


const TreeMobile = require('../js/tree_mobile.jsx');



//Roboczo
let henryText = "Henry VIII is one of the most famous kings in English history. He was the second Tudor monarch and was well-known for having six wives. His break with the papacy in Rome established the Church of England and began the Reformation.";
let aragonText = 'Married to Henry VIII from 1509 to 1533, mother to Mary I. Catherine was born near Madrid in December 1485. She was the daughter of King Ferdinand and Queen Isabella, whose marriage had united Spain. At three years of age Catherine was betrothed to King Henry VIIs oldest son Arthur, only a year younger than her. Catherine was tutored in religion and classics by Alessandro Geraldini, a clerk in Holy Orders, and remained a devout Catholic throughout her life.';
let boleynText = 'Married do Henry VIII from 1533 to 1536, mother to Elizabeth I. Henrys desire to divorce his first wife and marry Anne helped bring about the English Reformation. She was the first English queen to be publicly executed.';
let seymourText = 'Married do Henry VIII in 1536, mother to Edward VI. Was Queen of England from 1536 to 1537 as the third wife of King Henry VIII. She succeeded Anne Boleyn as queen consort following the latters execution in May 1536. She died of postnatal complications less than two weeks after the birth of her only child, a son who became King Edward VI. She was the only one of Henrys wives to receive a queens funeral, and his only consort to be buried beside him in St Georges Chapel at Windsor Castle.';
let clevesText = 'Married to Henry VIII in 1540- the marriage was anulled that same year. Was Queen of England from 6 January to 9 July 1540 as the fourth wife of King Henry VIII. The marriage was declared never consummated and, as a result, she was not crowned queen consort. Following the annulment, she was given a generous settlement by the King, and thereafter referred to as the Kings Beloved Sister. She lived to see the coronation of Queen Mary I, outliving the rest of Henrys wives.';
let howardText = 'Married to Henry VIII from 1540 to 1542. Was Queen of England from 1540 until 1541, as the fifth wife of Henry VIII.[a] She (then 16 or 17) married him (then 49) on 28 July 1540, at Oatlands Palace, in Surrey, almost immediately after the annulment of his marriage to Anne of Cleves was arranged. Catherine was stripped of her title as queen within 16 months, in November 1541. She was beheaded three months later, on the grounds of treason for committing adultery while married to Henry.';
let parrText = 'Married to Henry VII form 1543 to his death in 1547. Was Queen of England and of Ireland (1543–47) as the last of the six wives of King Henry VIII, and the final queen consort of the House of Tudor. She married him on 12 July 1543, and outlived him by one year. She was also the most-married English queen, with four husbands.';
let maryText = 'Daughter of Catherine of Aragon and Henry VIII. Was Queen of England and Ireland from July 1553 until her death. Mary is best known for her aggressive and bloody pursuit of the restoration of Roman Catholicism in England and Ireland in an attempt to reverse the English Reformation of her father, Henry VIII.';
let elizabethText = 'Daughter of Anne Boleyn and Henry VIII. Was Queen of England and Ireland from 17 November 1558 until her death. Sometimes called The Virgin Queen, Gloriana or Good Queen Bess, the childless Elizabeth was the last monarch of the House of Tudor.';
let edwardText = 'Son of Jane Seymour and Henry VIII- his only male descendant.Was King of England and Ireland from 28 January 1547 until his death. He was crowned on 20 February at the age of nine. The son of Henry VIII and Jane Seymour, Edward was Englands first monarch to be raised as a Protestant. During his reign, the realm was governed by a Regency Council because he never reached his majority. The Council was first led by his uncle Edward Seymour, 1st Duke of Somerset (1547–1549), and then by John Dudley, 1st Earl of Warwick, from 1551 Duke of Northumberland.';

let infoTableParents = [
  {
    name: "henry",
    bio: <BioContent name="Henry VIII" dateBirth="28.06.1491" dateDeath="28.01.1547" text={henryText}/>
  }, {
    name: "aragon",
    bio: <BioContent name="Catherine of Aragon" dateBirth="16.12.1485" dateDeath="7.01.1536" text={aragonText}/>
  }, {
    name: "boleyn",
    bio: <BioContent name="Anne Boleyn" dateBirth="c. 07.1501" dateDeath="19.05.1536" text={boleynText}/>
  }, {
    name: "seymour",
    bio: <BioContent name="Jane Seymour" dateBirth="c. 1508" dateDeath="24.10.1537" text={seymourText}/>
  }, {
    name: "cleves",
    bio: <BioContent name="Anne of Cleves" dateBirth="22.09.1515" dateDeath="16.07.1557" text={clevesText}/>
  }, {
    name: "howard",
    bio: <BioContent name="Catherine Howard" dateBirth="c. 1523" dateDeath="13.02.1542" text={howardText}/>
  }, {
    name: "parr",
    bio: <BioContent name="Catherine Parr" dateBirth="1512" dateDeath="5.09.1548" text={parrText}/>
  }
];

let infoTableChildren = [
  {
    name: "mary",
    bio: <BioContent name="Mary I" dateBirth="18.02.1516" dateDeath="17.11.1558" text={maryText}/>
  }, {
    name: "elizabeth",
    bio: <BioContent name="Elizabeth I" dateBirth="7.09.1533" dateDeath="24.03.1603" text={elizabethText}/>
  }, {
    name: "edward",
    bio: <BioContent name="Edward VI" dateBirth="12.10.1537" dateDeath="6.07.1553" text={edwardText}/>
  }
];

class Main extends React.Component {

  render() {
    return (
      <div>
        <a href="https://museum.wales/art/online/?action=show_item&item=737" target="_blank" style={{
          textDecoration: "none"
        }}>
          <section id="welcome">
            <div id="welcomeDiv">
              <p>Meet the most famous members
                <br/>
                of the Tudor Dynasty
                <br/>who shaped history</p>
            </div>
          </section>
        </a>

 <Tree/>
 <TreeMobile/>

      </div>
    )
  }
}



module.exports = Main;
export {infoTableChildren};
export {infoTableParents};
