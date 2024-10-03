package com.dabananda.ems_backend.service.impl;

import com.dabananda.ems_backend.dto.DepartmentDto;
import com.dabananda.ems_backend.entity.Department;
import com.dabananda.ems_backend.exception.ResourceNotFoundException;
import com.dabananda.ems_backend.mapper.DepartmentMapper;
import com.dabananda.ems_backend.repository.DepartmentRepository;
import com.dabananda.ems_backend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department not found with id:" + departmentId)
        );
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map(
                department -> DepartmentMapper.mapToDepartmentDto(department)).collect(Collectors.toList()
        );
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updateDepartment) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department not found with id:" + departmentId)
        );
        department.setDepartmentName(updateDepartment.getDepartmentName());
        department.setDepartmentDescription(updateDepartment.getDepartmentDescription());
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public void deleteDepartment(Long departmentId) {
        departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department not found with id:" + departmentId)
        );
        departmentRepository.deleteById(departmentId);
    }
}
