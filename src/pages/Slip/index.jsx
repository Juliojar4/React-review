import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import getSlip from '../../services/slip';

const Slip = (props) => {
    const [id, setId] = useState(1);
    const [phrase, setPhrase] = useState('');

    useEffect(() => {
        getSlip(id)
            .then((res) => {
                setId(res.id);
                setPhrase(res.advice);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const decrementId = () => {
        if (id >= 1) {
            return setId(id - 1);
        }
        setId(1);
    };
    const randomId = () => {
        setId(() => Math.random() * 225);
    };

    const incrementId = () => {
        if (id <= 224) {
            return setId(id + 1);
        }
        setId(224);
    };

    return (
        <>
            {phrase && (
                <>
                    <p className="text-white font-bold text-center text-4xl">
                        "{phrase}" 🤙 
                    </p>
                    <div className="flex justify-center gap-2 mt-10">
                        <Button buttonCustomEvent={decrementId}>Prev</Button>
                        <Button buttonCustomEvent={randomId}>Random</Button>
                        <Button buttonCustomEvent={incrementId}>Next</Button>
                    </div>
                </>
            )}
        </>
    );
};

export default Slip;
