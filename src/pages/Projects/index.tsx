import React, { useEffect, useState, useCallback, memo } from 'react';
import { makeStyles, Box, Typography, Grid, Container, Card, CardHeader, CardContent, CardActionArea, CardActions, Tooltip, CircularProgress } from '@material-ui/core';
import { Element } from 'react-scroll';
import api from "../../service/api";
import formatDatePtBr from "../../resources/FormatDatePtBr"

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "64px",
    minHeight: "calc(100vh - 128px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: theme.palette.background.default,
    transition: 'all 0.3s',
    paddingBottom: "64px",
  },
  cardContent: {
    minHeight: "96px",
  }
}))

const Contents: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);


  const listRepos = useCallback(async () => {
    const reponse = await api.get("https://api.github.com/users/LeonardoJRibeiro/repos");
    if (reponse) {
      setRepos(reponse.data as any);
    }
  }, []);

  useEffect(() => {
    listRepos();
  }, [listRepos]);

  const blackList = process.env.REACT_APP_BLACKLIST_REPOS;

  const parsedBlackList = blackList ? JSON.parse(blackList) : [];

  const classes = useStyles();
  return (
    <Element name="projects" >
      <Box className={classes.root}>
        <Container maxWidth="md">
          <Box display="flex" justifyContent="center" pb={5}>
            <Typography variant="h2" >Projetos</Typography>
          </Box>
          <Box display="flex" justifyContent="center" pb={5}>
            <Typography variant="h6" >Essa seção ainda está em construção...</Typography>
          </Box>
          <Grid container spacing={3} justify="center">
            <>
              {
                repos.length ? repos.map((repo, index) => {
                  if (parsedBlackList.includes(repo.name)) {
                    return null;
                  }
                  return (
                    <Grid item key={index} xs={12} sm={6}>
                      <Card>
                        <CardHeader title={repo.name} />
                        <Tooltip title={`Acessar ${repo.name} no Github`}>
                          <CardActionArea href={repo.html_url} target="_blank" >
                            <CardContent className={classes.cardContent}>
                              <Typography align="justify">{repo.description}</Typography>
                            </CardContent>
                          </CardActionArea>
                        </Tooltip>
                        <CardContent>
                          <Typography variant="caption">Linguagem: {repo.language}</Typography>
                        </CardContent>
                        <CardActions>
                          <Typography variant="body2">Criado em: {formatDatePtBr(repo.created_at)}</Typography>
                          <Typography variant="body2">Atualizado em: {formatDatePtBr(repo.updated_at)}</Typography>
                        </CardActions>
                      </Card>
                    </Grid>
                  )
                })
                  : (
                    <Box display="flex" justifyContent="center" pt={6}>
                      <CircularProgress variant="indeterminate" />
                    </Box>
                  )
              }
            </>
          </Grid>
        </Container>
      </Box>
    </Element>
  );
}

export default memo(Contents);