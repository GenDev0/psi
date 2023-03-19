import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

export class ProjectRepository extends Repository<Project> {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {
    super(
      projectRepository.target,
      projectRepository.manager,
      projectRepository.queryRunner,
    );
  }

  // Custom methods in the repo...

  //Get All(byfiltre) Projects
  // async getProjects(
  //   filterProjectDto: getProjectsFilterDto,
  // ): Promise<Project[]> {
  //   const { search } = filterProjectDto;
  //   const query = this.projectRepository.createQueryBuilder('project');

  //   if (search) {
  //     query.andWhere(
  //       '(project.title Like :search OR project.description Like :search)',
  //       {
  //         search: `%${search}%`,
  //       },
  //     );
  //   }

  //   const projects = await query.getMany();
  //   return projects;
  // }

  // create a new Project
  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const { name, projectDescription } = createProjectDto;
    const project = new Project();
    project.name = name;
    project.projectDescription = projectDescription;

    await project.save();

    return project;
  }
}
