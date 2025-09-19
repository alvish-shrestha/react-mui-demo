import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas
        enim dolorum perspiciatis delectus cupiditate, voluptatum, explicabo
        error, quia obcaecati placeat illo est magni fugiat ut corporis sequi
        fuga nemo.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum
        ratione sequi asperiores modi porro. Corporis maiores commodi illo sit.
        Repudiandae, suscipit odit similique deserunt sit eius molestiae totam
        voluptas!
      </Typography>
    </div>
  );
};
