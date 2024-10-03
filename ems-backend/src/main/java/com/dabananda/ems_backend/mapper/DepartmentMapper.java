package com.dabananda.ems_backend.mapper;

import com.dabananda.ems_backend.dto.DepartmentDto;
import com.dabananda.ems_backend.entity.Department;

public class DepartmentMapper {
    // convert department jpa entity into departmentdto
    public static DepartmentDto mapToDepartmentDto(Department department) {
        return new DepartmentDto (
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    // convert departmentdto into department jpa entity
//    public static Department mapToDepartment(DepartmentDto departmentDto) {
//        return new Department(
//                departmentDto.getId(),
//                departmentDto.getDepartmentName(),
//                departmentDto.getDepartmentDescription()
//        );
//    }
    public static Department mapToDepartment(DepartmentDto departmentDto) {
        // When the ID is null (for new department creation), don't pass it to the constructor
        return new Department(
                departmentDto.getId() != null ? departmentDto.getId() : 0L,  // Avoid null value for ID during mapping
                departmentDto.getDepartmentName(),
                departmentDto.getDepartmentDescription()
        );
    }
}
