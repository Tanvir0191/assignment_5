import { use } from 'react';

const Technology = ({ technologyPromise }: { technologyPromise: Promise<unknown> }) => {

    const data = use(technologyPromise)

    console.log(data)

    return (
        <div>
            <h2>Technology</h2>
        </div>
    );
};

export default Technology;