package com.revature.oracles.maximuscarrental.repo;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.revature.oracles.maximuscarrental.models.Car;

@RepositoryRestResource (collectionResourceRel = "cars", path = "carRepo")
public interface CarRepo extends PagingAndSortingRepository<Car, Integer>{

}