import React from 'react';
import ReactDOM from 'react-dom';
const BioContent = require('../js/bio_content.jsx');
const Tree = require('../js/tree.jsx');


const TreeMobile = require('../js/tree_mobile.jsx');



//Roboczo
let henryText = "Henry VIII is one of the most famous kings in English history. Famed for having sic wives, out of which he had 2 beheaded, his abrouptous temper, large apetite and ego, obsession with having a legitimate male heir and creating a whole new religion (the Church of England) so he could divorce his first wife- Catherine of Aragon. It was the desire to have a son, as well as his vanity that led to his six marriages. He was a mighty, feared and widely respected ruler. He is thought to be the founder of the Royal Navy. Easily the most well-known sovereign in the history of the UK, largely due to his extraordinary life and marital woes.";

let aragonText = 'The first wife of Henry VIII and mother of Mary I. Catherine came form Spain, the daughter of Isabella I of Castile and Ferdinand II of Aragon. From the age of three she was set to marry Arthur, Prince of Wales- the eldest brother of Henry and heir to the trone. She married him at 16, but Arthur tragically died only 5 months later. Their marriage was said to not have been consummated due to Arthur being only 15. This allowed her to marry Henry and become Queen in 1509. She gave Henry a daughter, but not a son he desperately wanted. This was the main cause for Henry wanting to replace his wife (another was his untamable lust). He seeked anullment from the Pope, but to no avail, so he cast his lawful wife to live in exile and started the process of separation from the Catholic Church. Catherine never ceased to love him and till her death continued to title herself the Queen.';

let boleynText = 'The replacement for Catherine of Aragon as wife to Henry VIII. Their romance begun when Catherine and Henry were legally married. Anne was younger and more beautiful than the Queen, which infatuated Henry and he deemed her able to at last give him a son. His passion for her impacted his mind when it came to getting rid of Catherine and Anne acted to assure it would happen. Her ambition was to be Queen. And she indeed was crowned in 1533. She had a daughter, future Elizabeth I, but later suffered multiple miscarriages- Henry was disappointed and his interest shifted to Jane Seymour. He began searching for a way to end his marriage to Anne- the woman for whom he created a new religion. He had her investigated for high treason on the grounds of incest and adultery. The evidence was fabricated, which Henry was aware of. Nevertheless he had Anne executed by beheading in the Tower of London.';

let seymourText = 'The third wife of Henry VIII, who finally provided him with a male heir. She was never crowned, titled only as queen consort, because she died before the coronation could take place. Henry loved her with all his heart, possibly the most of all his wives. He was bethrothed to her just one day after the execution of Anne Boleyn. He burst with joy and pride when she had a son, future Edward VI in 1537. But joy soon turned to overwhelming grief when Jane died of postnatal complications just two weeks later. Henry was inconsolable and grieved for a long time. Jane is his only wife to be buried alongside him at Windsor Castle, which proves his affection. His grief led to his next marriage not being a result of a liaison, but diplomacy.';

let clevesText = 'The fourth wive of Henry VIII, she outlived all his other wives. She came from what is today Germany.She was matched with Henry because the marriage would provide him with a valuable ally. Henry, still grieving for Jane Seymour, despised his new bride from the beginning. He was so dissapointed with her looks (though many say unjustly) that he called her a Flanders mare and urged his officials to find a way to get out of the upcoming wedding. But to no avail, and they were married in 1540. He hated his new wife so much he never consummated the marriage and was plotting to get rid of her. She knew what had happened to her predecessors, so when he asked for an anullment on the grounds of non-consummation, she agreed without a fuss. He granted her a considerate settlement and later referred to her as his Beloved Sister. They grew to be friends.';

let howardText = 'The fifth wife of Henry VIII, only 16 or 17 when she married him. They wed almost immediately after his anullment from Anne of Cleves was finalised. She was young and therefore naive and she did not realise that her new husband had a reputation of a monster when angered. She enjoyed the lavishness of being Queen, but was unaware of how easily the position could be lost. She carelessly begun a romance with Thomas Culpeper, a male courtier. Henry was at this time an older man, obese and suffering from an ulcer on his leg which issued a foul smell, so no wonder that the teenager was infatuated with young and hansome Culpeper. But the romance brought her downfall- kings were allowed to have lovers, but queens not. Her romance with Francis Derenham from before marriage to Henry surfaced and she was accused of not being a virgin on her wedding night. Raging Henry had her and both Culpeper and Derenham executed.';

let parrText = 'Sixth and the last wife of Henry VIII, she outlived him. She never particularly wanted to marry him, as she was simply affraid- knowing what had befollen his previous wives. But Henry was persistent and saying no to him could proven much worse than marrying him. She was particularly kind to his children and played the role of a mother figure. She helped Mary and Elizabeth reconcile with their father and also was very fond of Edward. When Henry went on a campaign to France she was granted power as his regent. She was free to rule as she pleased. Her actions as regent and her strong spirit re thought to have been an inspiration for Elizabeth. She had argued with Henry about religion and some courtiers tried to use this to conflict the spouses- there was even a warrant drwan up for her arrest at one point, but she managed to reconcile with her husband and possibly avoid beheading.';

let maryText = 'Daughter of Catherine of Aragon and Henry VIII, known as the Bloody Mary because of her violent persecution of Protestants, which led to over 280 people burned at the stake during her five-year reign. A devount Catholic like her mother and angry at he father for all Catherine (whom she loved with all her heart) suffered at his hand, she held the reformation (started by Henry) in utter contempt. She strived to bring back Catholicism as the main religion in England and to reverse the reforms of Henry. She was unhappily married to Philip of Spain. She loved him dearly, but he despised her. She desired a baby, but sadly suffered from phantomic pregnancies and ultimately died childess at the age of 42, probably due to an ovarian cyst or uterine cancer. She lived a life of misery, but she also caused much misery to innocent people.';

let elizabethText = 'Daughter of Anne Boleyn and Henry VIII. Considered to be the greatest Queen of England thanks to her military victories and England entering the Golden Age during her reign. Loved by her subject, she was called the Virgin Queen as she refused to take a husband- that was a political decision as a marriage alliance could make her loose the actual power in her own kingdom, as wives were forced to be completely obediened to their husbands. She perfected the art of diplomancy in order to swiftly get out of constanly incoming marriage offers. She had to face not only the wrath of foreign ambassadors, but also her own officials who feared for the succesion. Her trademark was auburn hair, face white as a sheet (achieved by extensive make up), pearl jewerly and opulent dresses. Her feud with her cousin, Mary Queen of Scots, which ultimately let to the latter being executed, was one of the main narratives of her life.';

let edwardText = 'Son of Jane Seymour and Henry VIII, the only mail heir to the Tudor dynasty. He brought much joy to his father, but his life was marred with tragedy. It begun at his birth, wich led to his mother dying, and ended with his untimely death in mysterious circumstances. He was crowned at the tender age of 9, but all state affairs were handled in his name by a Regency Council led by his uncle Edward Seymour. He contracted a cough and a fever when he was 15- an infection which worsened and killed him in the course of 6 months, during which he suffered greatly. He admitted to his tutor that he was glad to die. It is currently believed that the said infection was tuberculosis or acute bronchopneumonia. His uncle was accused of prolonging his torment with useless and unproven treatments even when it was clear that the illness was terminal and painful. It is suggested that Edward Seymour tried to extend his own rule this way.';

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
