import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { memo, FC, useEffect, useState } from "react"
import { connect } from "react-redux"

import styles from "@/styles/MainPage.module.css"

import { NextThunkDispatch } from "store"

import { RootState } from "store/reducers"

import {
    getOnePeriodAction,
    getPeriodsAction,
    setLoadingAction,
} from "store/actions/periodActions"

import PeriodCard from "@/components/PeriodCard/PeriodCard"
import Layout from "@/components/Layout/Layout"
import InfoBlock from "@/components/InfoBlock/InfoBlock"
import Modal from "@/components/UI/Modal/Modal"
import { getStatusAction } from "store/actions/statusActions"

interface InputProps extends RootState {
    dispatch: NextThunkDispatch
}

const MainPage: NextPage<InputProps> = ({ dispatch, periodStore }) => {
    const { items, isOpenModal, loading, error, reload } = periodStore
    const { push } = useRouter()

    useEffect(() => {
        handleLoad()
    }, [reload])

    useEffect(() => {
        if (error) {
            push("/401")
        }
    }, [error])

    const handleLoad = async () => {
        await dispatch(await setLoadingAction(true))
        await dispatch(await getPeriodsAction())
        await dispatch(await getStatusAction())
    }

    const onClick = async (guid: string) => {
        await dispatch(await setLoadingAction(true))
        await dispatch(await getOnePeriodAction(guid))
        push(`/period/${guid}`)
    }

    return (
        <Layout title="Бизнес ланчи">
            {items.length === 0 ? (
                <h2 className="title">Инициализация приложения</h2>
            ) : (
                <InfoBlock />
            )}
            <section className={styles.root}>
                {loading ? (
                    <h2>Идет загрузка</h2>
                ) : (
                    items.map((period) => (
                        <PeriodCard
                            key={period.GUIDString}
                            period={period}
                            onClick={onClick}
                        />
                    ))
                )}
            </section>
        </Layout>
    )
}

export default connect((state: RootState) => state)(MainPage)
