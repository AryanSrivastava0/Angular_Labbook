package com.cg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.entity.Movies;
import com.cg.service.MoviesService;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class MoviesController {
	
	@Autowired
	private MoviesService service;
	
	@PostMapping("/add")
	public Movies addMovie(@RequestBody Movies movie) {
		return service.addMovie(movie);
	}
	@GetMapping("/get")
	public List<Movies> getMovies()
	{
		return (List<Movies>) service.getMovies();
	}
}
