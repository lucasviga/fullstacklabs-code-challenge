import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Blocks as BlocksInterface } from '../types/Blocks';

type BlocksProps = {
  blocks: BlocksInterface;
}

function Blocks({ blocks }: BlocksProps) {
  const BoxBlockContainer = styled(Box)({
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 2,
    padding: 8,
    marginBottom: 4,
  });

  const BoxBlockTitle = styled(Typography)({
    color: '#304FFE',
    fontSize: 10,
    fontWeight: 'bold',
  });

  const BoxBlockDescription = styled(Typography)({
    color: '#263238',
    fontSize: 14,
    fontWeight: 'normal',
  });

  const Loading = () => <Typography>Loading</Typography>;

  return (
    <>
      {blocks.loading ? <Loading /> : (
        blocks.data.map((block) => (
          <BoxBlockContainer>
            <BoxBlockTitle>{block.id}</BoxBlockTitle>
            <BoxBlockDescription>{block.attributes.data}</BoxBlockDescription>
          </BoxBlockContainer>
        ))
      )}

      {blocks.data.length <= 0 && !blocks.error && <Typography>There is no blocks to show!</Typography>}

      {blocks.error && <Typography>Oops... Something is wrong!</Typography>}
    </>
  )
}

export default Blocks;
