package com.revature.oracles.maximuscarrental.repo;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.revature.oracles.maximuscarrental.models.Admin;

import org.springframework.data.repository.PagingAndSortingRepository;

@RepositoryRestResource(collectionResourceRel = "admins", path = "adminRepo")
public interface AdminRepo extends PagingAndSortingRepository<Admin, Integer>{
 
}