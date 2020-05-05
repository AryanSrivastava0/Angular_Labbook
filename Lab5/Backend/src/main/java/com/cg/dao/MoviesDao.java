package com.cg.dao;

import org.springframework.data.repository.CrudRepository;

import com.cg.entity.Movies;
public interface MoviesDao extends CrudRepository<Movies,Integer>{

}
