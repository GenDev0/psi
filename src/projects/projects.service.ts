import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { ProjectRepository } from './project.repository';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  //create a new Project
  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectRepository.createProject(createProjectDto);
  }

  async getProjectById(id: number, user: User): Promise<Project> {
    // return this.taskRepository.findOneBy({ id });
    const found = await this.projectRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Task with ID "${id} is Not Found"`);
    }
    return found;
  }

  async updateProjec(
    id: number,
    user: User,
    createProjectDto: CreateProjectDto,
  ): Promise<Project> {
    const project = await this.getProjectById(id, user);
    const { name, projectDescription, deleted } = createProjectDto;
    project.name = name;
    project.deleted = deleted;
    project.projectDescription = projectDescription;
    await project.save();
    return project;
  }

  // findAll() {
  //   return `This action returns all projects`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} project`;
  // }

  // update(id: number, updateProjectDto: UpdateProjectDto) {
  //   return `This action updates a #${id} project`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} project`;
  // }
}
