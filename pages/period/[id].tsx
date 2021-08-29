import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useCallback, useEffect } from "react"
import { connect } from "react-redux"
import { NextThunkDispatch } from "store"
import {
    closePeriodModalAction,
    getOnePeriodAction,
} from "store/actions/periodActions"
import { getStatusAction } from "store/actions/statusActions"
import { RootState } from "store/reducers"

import Layout from "@/components/Layout/Layout"
import Period from "@/components/Period/Period"
import UIButton from "@/components/UI/Button/UIButton"
import Modal from "@/components/UI/Modal/Modal"
import UIButtonGroup from "@/components/UI/UIButtonGroup/UIButtonGroup"

interface InputProps extends RootState {
    dispatch: NextThunkDispatch
}

const PeriodPage: NextPage<InputProps> = ({ dispatch, periodStore }) => {
    const {
        selectedPeriod,
        selectedPeriodId,
        reload,
        isOpenModal,
    } = periodStore
    const { query, back } = useRouter()

    useEffect(() => {
        handleRefresh()
        handleGetStatus()
    }, [query.id])

    useEffect(() => {
        if (reload) {
            handleRefresh()
            handleGetStatus()
        }
    }, [reload])

    const handleGetStatus = async () => {
        await dispatch(await getStatusAction())
    }

    const handleRefresh = async () => {
        if (typeof query.id === "string") {
            await dispatch(await getOnePeriodAction(query.id))
        }
    }

    const handleClose = useCallback(async () => {
        await dispatch(await closePeriodModalAction())
    }, [isOpenModal])

    return (
        <Layout title={selectedPeriod.Name}>
            {selectedPeriodId !== "" ? (
                <Period period={selectedPeriod} />
            ) : null}
            <Modal isOpenModal={isOpenModal} onClose={handleClose}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "2rem 4rem",
                        borderRadius: "8px",
                        background: "#293048",
                        color: "#fff",
                        textAlign: "center",
                    }}
                >
                    <h2>Измениения сохранены</h2>

                    <UIButtonGroup>
                        <UIButton
                            color="success"
                            size="medium"
                            title="Продолжить"
                            onClick={handleClose}
                        />
                    </UIButtonGroup>
                </div>
            </Modal>
        </Layout>
    )
}

export default connect((state: RootState) => state)(PeriodPage)
