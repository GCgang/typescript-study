/**
 * Template Literal Type
 */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

type ColorAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColorAnimal = 'black-cat'; // ...
