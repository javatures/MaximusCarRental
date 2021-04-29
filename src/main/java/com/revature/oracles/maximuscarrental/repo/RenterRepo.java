package com.revature.oracles.maximuscarrental.repo;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.revature.oracles.maximuscarrental.models.Renter;

@RepositoryRestResource(collectionResourceRel="renters", path="renterRepo")
public interface RenterRepo extends PagingAndSortingRepository<Renter, Integer>{

    

}