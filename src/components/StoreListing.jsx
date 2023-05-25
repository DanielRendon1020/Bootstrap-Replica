import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 40px;
  justify-content: center;
  text-align: center;
`;

const StyledRow = styled(Row)`
  padding: 1rem;
  border: 1px solid #e8e9eb;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(344px, 1fr));
`;

const HorizontalRow = styled(Row)`
  align-items: center;
`;

const stores = ["7-11", "Smiths", "Nobles", "WinCo", "Walmart", "Target"];

const CircleDiv = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: grey;
  border: 1px solid black;
  border-radius: 100%;
`;

const storesMap = stores.map((storeName, key) => {
  return (
    <HorizontalRow key={key}>
      <Col xs=".5">
        <div style={{ display: "inline-flex"}}>
          <CircleDiv />
          <div className="ms-4 p-2">
            <h5 style={{ fontWeight: "bold" }}>{storeName}</h5>
            <p>Delivery and Pickup</p>
          </div>
        </div>
      </Col>
    </HorizontalRow>
  );
});

export default function StoreListing() {
  return (
    <StyledContainer>
      <StyledRow>{storesMap}</StyledRow>
    </StyledContainer>
  );
}
