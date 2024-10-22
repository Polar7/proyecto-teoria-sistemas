export interface ResultApi {
  results: Array<RandomUserDto>;
}


/**
 * Dto que moldea un Usuario aleatorio
 */
export interface RandomUserDto {
  gender: string,
  name: NameDto,
  location: LocationDto,
  email: string,
  dob: BornDto
  cell: string,
  picture: PictureDto
}

export interface NameDto {
  title: string,
  first: string,
  last: string;
}

export interface LocationDto {
  street: AddressDto,
  city: string,
  country: string,
  postcode: number
}

export interface AddressDto {
  number: number,
  name: string;
}

export interface BornDto {
  date: string,
  age: number;
}

export interface PictureDto {
  large: string;
}

