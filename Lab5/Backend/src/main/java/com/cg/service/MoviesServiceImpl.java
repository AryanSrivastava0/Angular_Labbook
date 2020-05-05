package com.cg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.dao.MoviesDao;
import com.cg.entity.Movies;

@Service
public class MoviesServiceImpl implements MoviesService{
	
	@Autowired
	private MoviesDao dao;

	@Override
	public Movies addMovie(Movies movie) {
		return dao.save(movie);
	}

	@Override
	public List<Movies> getMovies() {
		return (List<Movies>) dao.findAll();
	}
}
