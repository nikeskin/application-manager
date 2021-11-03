import styled from "styled-components";

export default function DocumentationArea({application}) {

    return (
        <Layout>
            <Provided>
                <ProvidedHeadline>Provided:</ProvidedHeadline>
                <Input>Testing Concept:</Input>
                <Input>Concept of Rights & Roles:</Input>
                <Input>IT Concept:</Input>
            </Provided>
            <Missing>
                <MissingHeadline>Missing:</MissingHeadline>
                <Input>User Handbook:</Input>
                <Input>IT Achitecture:</Input>
            </Missing>
        </Layout>
    )

}

const Layout = styled.div`
  display: grid;
  grid-column: 1 / 9;
  grid-template-columns: repeat(8, 1fr);
`

const Input = styled.div`
  padding-top: 10px;
`

const Provided = styled.div`
    grid-column: 1 / 5;
`

const Missing = styled.div`
    grid-column: 5 / 9;
`

const ProvidedHeadline = styled.h3`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: green;
`

const MissingHeadline = styled.h3`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: red;
`