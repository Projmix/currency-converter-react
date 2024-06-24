import React from 'react';
import useStore from '../store/useStore';
import { Container, Label, Input, FieldContainer } from './CurrencyConverter.styles';

const CurrencyConverter = () => {
  const { usd, eur, setUsd, setEur } = useStore();

  const handleUsdChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setUsd(value);
    }
  };

  const handleEurChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setEur(value);
    }
  };

  return (
    <Container>
      <FieldContainer>
        <Label>USD</Label>
        <Input type="text" value={usd} onChange={handleUsdChange} />
      </FieldContainer>
      <FieldContainer>
        <Label>EUR</Label>
        <Input type="text" value={eur} onChange={handleEurChange} />
      </FieldContainer>
    </Container>
  );
};

export default CurrencyConverter;
