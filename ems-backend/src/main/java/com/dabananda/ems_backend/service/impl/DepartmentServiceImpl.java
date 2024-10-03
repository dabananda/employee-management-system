package com.dabananda.ems_backend.service.impl;

import com.dabananda.ems_backend.dto.DepartmentDto;
import com.dabananda.ems_backend.entity.Department;
import com.dabananda.ems_backend.mapper.DepartmentMapper;
import com.dabananda.ems_backend.repository.DepartmentRepository;
import com.dabananda.ems_backend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

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
}
