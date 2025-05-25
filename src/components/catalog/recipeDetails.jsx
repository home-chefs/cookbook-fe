// // src/components/details/RecipeDetails.jsx
// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Chip,
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Button,
//   CircularProgress
// } from '@mui/material';
// import { Link, useParams } from 'react-router-dom';
// import { useGetOneRecipe } from '../../hooks/useRecipes';

// export default function RecipeDetails() {
//   const { id } = useParams();
//   const [recipe] = useGetOneRecipe(id);

//   if (!recipe.id) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   const {
//     name,
//     time_to_cook,
//     cover_image_path,
//     video_link,
//     products = [],
//     directions = ''
//   } = recipe;

//   const imgSrc = cover_image_path
//     ? `/public/${cover_image_path}`
//     : '/images/placeholder.jpg';

//   let embedUrl = null;
//   if (video_link?.includes('youtube.com/watch')) {
//     const videoId = new URL(video_link).searchParams.get('v');
//     embedUrl = `https://www.youtube.com/embed/${videoId}`;
//   }

//   return (
//     <Container sx={{ mt: 4, mb: 6 }}>
//       <Typography variant="h3" sx={{ mb: 1 }}>
//         {name}
//       </Typography>
//       {time_to_cook && (
//         <Chip label={`Време: ${time_to_cook}`} sx={{ mb: 3 }} />
//       )}

//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src={imgSrc}
//             alt={name}
//             sx={{ width: '100%', borderRadius: 2 }}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           {embedUrl && (
//             <Box
//               sx={{
//                 position: 'relative',
//                 pt: '56.25%',
//                 mb: 3,
//               }}
//             >
//               <iframe
//                 src={embedUrl}
//                 title="Видео рецепта"
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                   border: 0,
//                 }}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </Box>
//           )}

//           <Typography variant="h5" sx={{ mb: 1 }}>
//             Съставки
//           </Typography>
//           <List dense>
//             {products.map((p, idx) => (
//               <ListItem key={idx} disableGutters>
//                 <ListItemText
//                   primary={`${p.name} — ${p.amount} ${p.amount_type}`}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 4 }} />
//       <Typography variant="h4" sx={{ mb: 2 }}>
//         Инструкции
//       </Typography>
//       {directions
//         .split('\n')
//         .filter(Boolean)
//         .map((step, i) => (
//           <Typography key={i} paragraph>
//             {step}
//           </Typography>
//         ))}

//       <Box sx={{ mt: 4 }}>
//         <Button component={Link} to="/catalog" variant="contained">
//           ⬅ Назад към каталога
//         </Button>
//       </Box>
//     </Container>
//   );
// }



// src/components/details/RecipeDetails.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  CircularProgress
} from '@mui/material';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGetOneRecipe } from '../../hooks/useRecipes';
import recipeAPI, { deleteRecipe } from '../../api/recipes';

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe] = useGetOneRecipe(id);

  if (!recipe.id) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  const {
    name,
    time_to_cook,
    cover_image_path,
    video_link,
    products = [],
    directions = ''
  } = recipe;

  const imgSrc = cover_image_path
    ? `/public/${cover_image_path}`
    : '/images/placeholder.jpg';

  let embedUrl = null;
  if (video_link?.includes('youtube.com/watch')) {
    const videoId = new URL(video_link).searchParams.get('v');
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  const handleDelete = async () => {
    try {
      await recipeAPI.deleteRecipe(1);
      navigate('/catalog');
    } catch (err) {
      console.error('Failed to delete recipe:', err);
      console.log(`id is: ${id}`)
      console.log(deleteRecipe)
    }
  };

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h3" sx={{ mb: 1 }}>
        {name}
      </Typography>
      {time_to_cook && (
        <Chip label={`Време: ${time_to_cook}`} sx={{ mb: 3 }} />
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={imgSrc}
            alt={name}
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          {embedUrl && (
            <Box
              sx={{
                position: 'relative',
                pt: '56.25%',
                mb: 3,
              }}
            >
              <iframe
                src={embedUrl}
                title="Видео рецепта"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          )}

          <Typography variant="h5" sx={{ mb: 1 }}>
            Съставки
          </Typography>
          <List dense>
            {products.map((p, idx) => (
              <ListItem key={idx} disableGutters>
                <ListItemText
                  primary={`${p.name} — ${p.amount} ${p.amount_type}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" sx={{ mb: 2 }}>
        Инструкции
      </Typography>
      {directions
        .split('\n')
        .filter(Boolean)
        .map((step, i) => (
          <Typography key={i} paragraph>
            {step}
          </Typography>
        ))}

      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button component={Link} to="/catalog" variant="contained">
          ⬅ Назад към каталога
        </Button>
        <Button onClick={handleDelete} color="error" variant="outlined">
          🗑 Изтрий рецепта #1
        </Button>
      </Box>
    </Container>
  );
}
