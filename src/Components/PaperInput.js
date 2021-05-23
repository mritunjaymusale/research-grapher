import React, { Suspense, useState } from 'react'
import { ProgressBar, } from 'react-materialize'
import { addPaper } from '../store/paperInputSlice';
import { useDispatch } from 'react-redux';

const Container = React.lazy(() => import('react-materialize/lib/Container'))
const Card = React.lazy(() => import('react-materialize/lib/Card'))


const PaperInput = () => {

    const [paperId, setPaperId] = useState('');
    const [paperType, setPaperType] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addPaper({ paperId: paperId, paperType: paperType }))
    }

    return (
        <Suspense fallback={<ProgressBar />} >
            <Container>
                <Card>
                    <h5>Enter the ID of the paper you are looking for</h5>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="input-field">
                            <input id="paperId" type="text" onChange={(e) => setPaperId(e.target.value)} />
                            <label htmlFor="paperId">Enter paper ID here</label>
                        </div>

                        <div>
                            <InputRadioComponent value="ArXiv" setPaperType={setPaperType} />
                            <InputRadioComponent value="DOI" setPaperType={setPaperType} />
                            <InputRadioComponent value="SemanticScholar" setPaperType={setPaperType} />
                        </div>

                        <input type="submit" value="Generate graph" className="btn black" />

                    </form>
                </Card>
            </Container>
        </Suspense>
    )
}

export const InputRadioComponent = ({ value, setPaperType }) => {
    return (
        <p>
            <label>
                <input name="paperType" type="radio" onChange={(e) => setPaperType(e.target.value)} value={value} />
                <span>{value}</span>
            </label>
        </p>
    )
}


export default PaperInput
