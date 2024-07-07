import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MagnifyingGlassIcon, MixerVerticalIcon } from '@radix-ui/react-icons';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import ProjectCard from '../Project/ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '@/Redux/Store';
import { fetchProjects, searchProjects } from '@/Redux/Project/Action';

export   const tags = [
  "All", "React", "Angular", "SpringBoot", "MySQL",
  "MongoDB", "C++", "Java","JavaScript" , "C#", "Dot-Net",
  "Python", "Flask", "Django", "Flutter", "Kotlin","API",
];
const ProjectList = () => {
  const [keyword, setKeyword] = useState("");
  const {project}=useSelector(store=>store)
  const dispatch=useDispatch()

  const handleFilterCategory = (value) => {
    if(value==="all"){
      dispatch(fetchProjects({}))
    }
    else
    dispatch(fetchProjects({category:value}))
    
  };
  const handleFilterTags = (value) => {
    if(value==="All"){
      dispatch(fetchProjects({}))
    }
    else
    dispatch(fetchProjects({tag:value}))
  
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    dispatch(searchProjects(e.target.value));
  };

  
 console.log("projects store",project)


  return (
    <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
      <section className='filter-section'>
        <Card className="p-5 sticky top-10">
          <div className='flex justify-between lg:w-[20rem]'>
            <p className='text-xl tracking-wider'>Filter</p>
            <Button variant="ghost" size="icon">
              <MixerVerticalIcon />
            </Button>
          </div>
          <CardContent className="mt-5">
            <ScrollArea className='space-y-7 h-[70vh]'>
              <div>
                <h1 className='pb-3 text-gray-400 border-b'>
                  Category
                </h1>
                <div className='pt-5'>
                  <RadioGroup
                    className="space-y-3 pt-3"
                    defaultValue="all"
                    onValueChange={(value) => handleFilterCategory(value)}
                  >
                    <div className='flex items-center gap-2'>
                      <RadioGroupItem value='all' id="r1" />
                      <Label htmlFor='r1'>All</Label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <RadioGroupItem value='fullstack' id="r2" />
                      <Label htmlFor='r2'>Full-Stack</Label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <RadioGroupItem value='frontend' id="r3" />
                      <Label htmlFor='r3'>Front-End</Label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <RadioGroupItem value='backend' id="r4" />
                      <Label htmlFor='r4'>Back-End</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className='pt-9'>
                <h1 className='pb-3 text-gray-400 border-b'>
                  Tags
                </h1>
                <div className='pt-5'>
                  <RadioGroup
                    className="space-y-3 pt-3"
                    defaultValue="all"
                    onValueChange={(value) => handleFilterTags(value)}
                  >
                    {tags.map((item) => (
                      <div key={item} className='flex items-center gap-2'>
                        <RadioGroupItem value={item} id={`r1-${item}`} />
                        <Label htmlFor={`r1-${item}`}>{item}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>
      <section className='projectListSection w-full lg:w-[48rem]'>
        <div className='flex gap-2 items-center pb-5 justify-between'>
          <div className='relative p-0 w-full'>
            <Input
              onChange={handleSearchChange}
              placeholder="Search Project"
              className='w-full px-9'
            />
            <MagnifyingGlassIcon className='absolute top-3 left-4' />
          </div>
        </div>
        <div>
          <div className="space-y-5 min-h-[74vh]">
            {
            keyword
            ?project.searchProjects.map((item,index)=> <ProjectCard
             item={item} key={item.id*index}/>)
            :project.projects?.map((item)=>(
              <ProjectCard key={item.id} item={item}/>
            ))
            
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectList;
