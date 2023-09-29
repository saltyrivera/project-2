import React, {useEffect} from "react";
import './question.scss';
import questionIcon from '../../../img/question-grey.png';
import arrowIcon from '../../../img/arrow-down-dark.png';


const Question = ({question, answer}) => {
    useEffect(() => {
        const questionBlockAll = document.querySelectorAll('.question');


        questionBlockAll.forEach((e) => {
            e.addEventListener('click', () => {
                if(!e.classList.contains('active')) {
                    questionBlockAll.forEach((elem) => {
                        if(elem.classList.contains('active')) {
                            elem.classList.remove('active');
                            elem.nextSibling.classList.remove('open');
                            // console.log(elem.nextSibling.classList)
                            elem.nextSibling.classList.remove('fade');
                            elem.childNodes[2].style.cssText = `
                                filter: 0;
                                transform: 0;
                                transition: all .5s;
                                color: white;
                            `;
                            elem.childNodes[0].style.cssText = `
                                filter: invert(100%);
                            `;
                            elem.childNodes[1].classList.remove('textactive');
                        }   
                    })
                };
                e.classList.add('active');
                e.nextSibling.classList.add('open');
                e.childNodes[1].classList.add('textactive');
                e.childNodes[2].style.cssText = `
                    filter: invert(100%);
                    transform: rotate(180deg);
                    transition: all .5s;
                `;
                e.childNodes[0].style.cssText = `
                    filter: invert(0%);
                `;
                
                setTimeout(() => {
                    e.nextSibling.classList.add('fade');
                }, 1)
                
            })
        })


    });

    return (
        <div className='faq-wrapper'>
            <div className="question"><img className='questionIcon' src={questionIcon} alt='иконка вопроса'></img><p className="text">{question}</p><img src={arrowIcon} alt='иконка стрелочки' className='arrowIcon'></img></div>
            <div className="answerblock">
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default Question;