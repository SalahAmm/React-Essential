import {type FC,type PropsWithChildren , type ReactNode} from 'react'


// interface GoalProps {
//     title: string;
//     children : ReactNode
// }

type GoalProps = PropsWithChildren<{title : string}>;

export default function Goal ({title , children}: GoalProps ) {
    return (
        <>
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button>Delete</button>
        </article>
        
        </>
    );
}
