package com.cg.service;

import java.util.List;

import com.cg.entity.Movies;
public interface MoviesService {

	public Movies addMovie(Movies movie);

	public List<Movies> getMovies();

}
