import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import Launch from '@models/Launch'
import LaunchServiceProvider from '@models/LaunchServiceProvider'
import RocketConfiguration from '@models/RocketConfiguration'
import Rocket from '@models/Rocket'
import MissionOrbit from '@models/MissionOrbit'
import Mission from '@models/Mission'
import PadLocation from '@models/PadLocation'
import Pad from '@models/Pad'
import Agency from '@models/Agency'
import Program from '@models/Program'
import ProgramAgency from '@models/ProgramAgency'
import LaunchProgram from '@models/LaunchProgram'

import launchesView from '@views/launches_view'

export async function saveLaunchesFromImport (launches: any) {
  const launchServiceProviderRepository = getRepository(LaunchServiceProvider)
  const rocketConfigurationRepository = getRepository(RocketConfiguration)
  const rocketRepository = getRepository(Rocket)
  const missionOrbitRepository = getRepository(MissionOrbit)
  const missionRepository = getRepository(Mission)
  const padLocationRepository = getRepository(PadLocation)
  const padRepository = getRepository(Pad)
  const programRepository = getRepository(Program)
  const agencyRepository = getRepository(Agency)
  const programAgencyRepository = getRepository(ProgramAgency)
  const launchRepository = getRepository(Launch)
  const launchProgramRepository = getRepository(LaunchProgram)

  for (const launch of launches) {
    if (launch.launch_service_provider !== null) {
      const existentLaunchServiceProvider = await launchServiceProviderRepository.findOne({
        select: ['id'],
        where: { id: launch.launch_service_provider.id }
      })

      if (!existentLaunchServiceProvider) {
        const launchServiceProviderToSave = launchServiceProviderRepository.create(
          launch.launch_service_provider
        )
        await launchServiceProviderRepository.save(launchServiceProviderToSave)
      } else {
        await launchServiceProviderRepository.update({
          id: launch.launch_service_provider.id
        }, launch.launch_service_provider)
      }
    }

    if (launch.rocket !== null) {
      if (launch.rocket.configuration !== null) {
        const existentRocketConfiguration = await rocketConfigurationRepository.findOne({
          select: ['id'],
          where: { id: launch.rocket.configuration.id }
        })

        if (!existentRocketConfiguration) {
          const rocketConfigurationToSave = rocketConfigurationRepository.create(
            launch.rocket.configuration
          )
          await rocketConfigurationRepository.save(rocketConfigurationToSave)
        } else {
          await rocketConfigurationRepository.update({
            id: launch.rocket.configuration.id
          }, launch.rocket.configuration)
        }
      }

      const existentRocket = await rocketRepository.findOne({
        select: ['id'],
        where: { id: launch.rocket.id }
      })

      if (!existentRocket) {
        const rocketToSave = rocketRepository.create({
          id: launch.rocket.id,
          rocket_configuration_id: launch.rocket.configuration !== null
            ? launch.rocket.configuration.id
            : null
        })
        await rocketRepository.save(rocketToSave)
      } else {
        await rocketRepository.update({
          id: launch.rocket.id
        }, {
          rocket_configuration_id: launch.rocket.configuration !== null
            ? launch.rocket.configuration.id
            : null
        })
      }
    }

    if (launch.mission !== null) {
      if (launch.mission.orbit !== null) {
        const existentMissionOrbit = await missionOrbitRepository.findOne({
          select: ['id'],
          where: { id: launch.mission.orbit.id }
        })

        if (!existentMissionOrbit) {
          const missionOrbitToSave = missionOrbitRepository.create(
            launch.mission.orbit
          )
          await missionOrbitRepository.save(missionOrbitToSave)
        } else {
          await missionOrbitRepository.update({
            id: launch.mission.orbit.id
          }, launch.mission.orbit)
        }
      }

      const existentMission = await missionRepository.findOne({
        select: ['id'],
        where: { id: launch.mission.id }
      })

      const missionData = {
        id: launch.mission.id,
        launch_library_id: launch.mission.launch_library_id,
        name: launch.mission.name,
        description: launch.mission.description,
        launch_designator: launch.mission.launch_designator,
        type: launch.mission.type
      }

      if (!existentMission) {
        const missionToSave = missionRepository.create({
          ...missionData,
          mission_orbit_id: launch.mission.orbit !== null
            ? launch.mission.orbit.id
            : null
        })
        await missionRepository.save(missionToSave)
      } else {
        await missionRepository.update({
          id: launch.mission.id
        }, {
          ...missionData,
          mission_orbit_id: launch.mission.orbit !== null
            ? launch.mission.orbit.id
            : null
        })
      }
    }

    if (launch.pad !== null) {
      if (launch.pad.location !== null) {
        const existentPadLocation = await padLocationRepository.findOne({
          select: ['id'],
          where: { id: launch.pad.location.id }
        })

        if (!existentPadLocation) {
          const padLocationToSave = padLocationRepository.create(
            launch.pad.location
          )
          await padLocationRepository.save(padLocationToSave)
        } else {
          await padLocationRepository.update({
            id: launch.pad.location.id
          }, launch.pad.location)
        }
      }

      const existentPad = await padRepository.findOne({
        select: ['id'],
        where: { id: launch.pad.id }
      })

      const padData = {
        id: launch.pad.id,
        url: launch.pad.url,
        agency_id: launch.pad.agency_id,
        name: launch.pad.name,
        info_url: launch.pad.info_url,
        wiki_url: launch.pad.wiki_url,
        map_url: launch.pad.map_url,
        latitude: launch.pad.latitude,
        longitude: launch.pad.longitude,
        map_image: launch.pad.map_image,
        total_launch_count: launch.pad.total_launch_count
      }

      if (!existentPad) {
        const padToSave = padRepository.create({
          ...padData,
          pad_location_id: launch.pad.location !== null
            ? launch.pad.location.id
            : null
        })
        await padRepository.save(padToSave)
      } else {
        await padRepository.update({
          id: launch.pad.id
        }, {
          ...padData,
          pad_location_id: launch.pad.location !== null
            ? launch.pad.location.id
            : null
        })
      }
    }

    if (launch.program !== null) {
      for (const singleProgram of launch.program) {
        const existentProgram = await programRepository.findOne({
          select: ['id'],
          where: { id: singleProgram.id }
        })

        const programData = {
          id: singleProgram.id,
          url: singleProgram.url,
          name: singleProgram.name,
          description: singleProgram.description,
          image_url: singleProgram.image_url,
          start_date: singleProgram.start_date,
          end_date: singleProgram.end_date,
          info_url: singleProgram.info_url,
          wiki_url: singleProgram.wiki_url
        }

        if (!existentProgram) {
          const programToSave = programRepository.create(programData)
          await programRepository.save(programToSave)
        } else {
          await programRepository.update({
            id: singleProgram.id
          }, programData)
        }

        if (singleProgram.agencies !== null) {
          const agenciesToSave = agencyRepository.create(singleProgram.agencies)
          await agencyRepository.save(agenciesToSave)

          for (const agency of agenciesToSave) {
            const programAgency = programAgencyRepository.create({
              program_id: singleProgram.id,
              agency_id: agency.id
            })
            await programAgencyRepository.save(programAgency)
          }
        }
      }
    }

    const existentLaunch = await launchRepository.findOne({
      select: ['id'],
      where: { id: launch.id }
    })

    const launchData = {
      id: launch.id,
      url: launch.url,
      launch_library_id: launch.launch_library_id,
      slug: launch.slug,
      name: launch.name,
      net: launch.net,
      window_end: launch.window_end,
      window_start: launch.window_start,
      inhold: launch.inhold,
      tbdtime: launch.tbdtime,
      tbddate: launch.tbddate,
      probability: launch.probability,
      holdreason: launch.holdreason,
      failreason: launch.failreason,
      hashtag: launch.hashtag,
      webcast_live: launch.webcast_live,
      image: launch.image,
      infographic: launch.infographic,

      imported_t: new Date(),

      launch_service_provider_id: launch.launch_service_provider !== null
        ? launch.launch_service_provider.id
        : null,

      rocket_id: launch.rocket !== null
        ? launch.rocket.id
        : null,

      mission_id: launch.mission !== null
        ? launch.mission.id
        : null,

      pad_id: launch.pad !== null
        ? launch.pad.id
        : null
    }

    let launch_id = launch.id

    if (!existentLaunch) {
      const launchToSave = launchRepository.create({
        ...launchData,
        status: 'draft'
      })
      await launchRepository.save(launchToSave)

      launch_id = launchToSave.id
    } else {
      await launchRepository.update({
        id: launch.id
      }, {
        ...launchData,
        status: 'draft'
      })
    }

    if (launch.program !== null) {
      for (const singleProgram of launch.program) {
        const programAgency = launchProgramRepository.create({
          launch_id: launch_id,
          program_id: singleProgram.id
        })
        await launchProgramRepository.save(programAgency)
      }
    }
  }
}

export default {
  async runningMessage (request: Request, response: Response) {
    return response.send('REST Back-end Challenge 20201209 Running')
  },

  async index (request: Request, response: Response) {
    const launchRepository = getRepository(Launch)

    const launches = await launchRepository.find({
      join: {
        alias: 'launches',
        leftJoinAndSelect: {
          launch_service_provider: 'launches.launch_service_provider',
          rocket: 'launches.rocket',
          rocket_configuration: 'rocket.rocket_configuration',
          mission: 'launches.mission',
          mission_orbit: 'mission.mission_orbit',
          pad: 'launches.pad',
          pad_location: 'pad.pad_location',
          launches_programs: 'launches.launches_programs',
          program: 'launches_programs.program',
          programs_agencies: 'program.programs_agencies',
          agency: 'programs_agencies.agency'
        }
      }
    })

    return response.json(launchesView.renderMany(launches))
  },

  async paginatedIndex (request: Request, response: Response) {
    const page = request.query.page
      ? Number(request.query.page)
      : 1
    const per_page = request.query.per_page
      ? Number(request.query.per_page)
      : 10

    const startIndex = (page * per_page) - per_page

    const launchRepository = getRepository(Launch)

    const [launches, count] = await launchRepository.findAndCount({
      join: {
        alias: 'launches',
        leftJoinAndSelect: {
          launch_service_provider: 'launches.launch_service_provider',
          rocket: 'launches.rocket',
          rocket_configuration: 'rocket.rocket_configuration',
          mission: 'launches.mission',
          mission_orbit: 'mission.mission_orbit',
          pad: 'launches.pad',
          pad_location: 'pad.pad_location',
          launches_programs: 'launches.launches_programs',
          program: 'launches_programs.program',
          programs_agencies: 'program.programs_agencies',
          agency: 'programs_agencies.agency'
        }
      },
      skip: startIndex,
      take: per_page
    })

    return response.json({
      launches: launchesView.renderMany(launches),
      start: startIndex,
      count
    })
  },

  async show (request: Request, response: Response) {
    const { launch_id } = request.params

    const launchRepository = getRepository(Launch)

    const launch = await launchRepository.findOne({
      where: { id: launch_id },
      join: {
        alias: 'launch',
        leftJoinAndSelect: {
          launch_service_provider: 'launch.launch_service_provider',
          rocket: 'launch.rocket',
          rocket_configuration: 'rocket.rocket_configuration',
          mission: 'launch.mission',
          mission_orbit: 'mission.mission_orbit',
          pad: 'launch.pad',
          pad_location: 'pad.pad_location',
          launches_programs: 'launch.launches_programs',
          program: 'launches_programs.program',
          programs_agencies: 'program.programs_agencies',
          agency: 'programs_agencies.agency'
        }
      }
    })

    if (launch) {
      return response.json(launchesView.render(launch))
    }

    response.status(404).json({ message: 'Launch was not found' })
  },

  async delete (request: Request, response: Response) {
    const { launch_id } = request.params

    const launchRepository = getRepository(Launch)

    const launch = await launchRepository.delete(launch_id)

    if (launch.affected > 0) {
      return response.json({ message: 'Launch was deleted successfully' })
    }

    return response.status(404).json({ message: 'Launch was not found' })
  },

  async update (request: Request, response: Response) {
    const { launch_id } = request.params

    const {
      url,
      launch_library_id,
      slug,
      name,
      status,
      net,
      window_end,
      window_start,
      inhold,
      tbdtime,
      tbddate,
      probability,
      holdreason,
      failreason,
      hashtag,
      webcast_live,
      image,
      infographic
    } = request.body

    const launchRepository = getRepository(Launch)

    const launchToUpdate = await launchRepository.findOne({ id: launch_id }, {
      select: ['name']
    })

    if (launchToUpdate !== undefined) {
      const data = {
        url,
        launch_library_id,
        slug,
        name,
        status,
        net,
        window_end,
        window_start,
        inhold,
        tbdtime,
        tbddate,
        probability,
        holdreason,
        failreason,
        hashtag,
        webcast_live,
        image,
        infographic
      }

      const schema = Yup.object().shape({
        url: Yup.string().required(),
        launch_library_id: Yup.number().nullable(),
        slug: Yup.string().required(),
        name: Yup.string().required(),
        status: Yup.string().required(),

        net: Yup.string().nullable(),
        window_start: Yup.string().nullable(),
        window_end: Yup.string().nullable(),

        inhold: Yup.boolean().nullable(),
        tbdtime: Yup.boolean().nullable(),
        tbddate: Yup.boolean().nullable(),
        probability: Yup.number().nullable(),

        holdreason: Yup.string().nullable(),
        failreason: Yup.string().nullable(),
        hashtag: Yup.string().nullable(),

        webcast_live: Yup.boolean().nullable(),
        image: Yup.string().nullable(),
        infographic: Yup.string().nullable()
      })

      await schema.validate(data, {
        abortEarly: false
      })

      const company = await launchRepository.update({ id: launch_id }, data)

      if (company.affected > 0) {
        return response.json({ message: 'Launch was updated successfully' })
      }
    }

    return response.status(404).json({ message: 'Launch was not found' })
  }
}
