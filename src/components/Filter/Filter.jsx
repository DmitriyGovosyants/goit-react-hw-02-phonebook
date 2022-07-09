import { FilterContainer, Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </FilterContainer>
  );
};
